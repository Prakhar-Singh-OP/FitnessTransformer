import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Video } from 'expo-av';
import { useTheme } from '../context/ThemeContext';
import { useResponsive } from '../utils/responsive';

type Props = {
  title: string;
  sets: string;
  videoUri?: string | number;
  description?: string;
  showFullscreen?: boolean;
};

export default function WorkoutCard({ title, sets, videoUri, description, showFullscreen = false }: Props) {
  const { theme } = useTheme();
  const video = useRef<Video | null>(null);
  const { width, scale, font } = useResponsive();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Debug logging
  React.useEffect(() => {
    if (videoUri) {
      console.log(`Loading video for "${title}":`, videoUri);
    }
  }, [videoUri, title]);

  const handleFullscreen = async () => {
    await video.current?.presentFullscreenPlayer();
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.card,
          padding: Math.max(12, scale(18)),
          borderRadius: Math.max(12, scale(20)),
        },
      ]}
    >
      <Text style={[styles.title, { color: theme.text, fontSize: font(20) }]}>{title}</Text>
      <Text style={[styles.sets, { color: theme.accent, marginTop: scale(8) }]}>{sets}</Text>
      {description ? (
        <Text style={{ color: theme.secondary, fontSize: font(14), marginTop: scale(10) }}>
          {description}
        </Text>
      ) : null}
      {videoUri ? (
        <>
          <View
            style={[
              styles.videoContainer,
              { height: Math.round(width * 0.48), borderRadius: Math.max(12, scale(16)) },
            ]}
          >
            <Video
              ref={video}
              style={[
                styles.video,
                { height: Math.round(width * 0.48), borderRadius: Math.max(12, scale(16)) },
              ]}
              source={typeof videoUri === 'string' ? { uri: videoUri } : videoUri}
              isLooping
              isMuted
              onLoad={handleVideoLoad}
              onError={handleVideoError}
              progressUpdateIntervalMillis={1000}
            />
            {isLoading && (
              <View style={[styles.loadingContainer, { height: Math.round(width * 0.48) }]}>
                <ActivityIndicator size="large" color={theme.accent} />
                <Text style={[styles.loadingText, { color: theme.secondary, marginTop: scale(10) }]}>
                  Loading video...
                </Text>
              </View>
            )}
            {hasError && (
              <View style={[styles.errorContainer, { height: Math.round(width * 0.48) }]}>
                <Text style={[styles.errorText, { color: theme.secondary }]}>
                  Video failed to load
                </Text>
              </View>
            )}
          </View>
          {showFullscreen && !hasError && (
            <TouchableOpacity
              style={[styles.fullscreenButton, { backgroundColor: theme.accent }]}
              onPress={handleFullscreen}
            >
              <Text style={styles.fullscreenText}>Watch Fullscreen</Text>
            </TouchableOpacity>
          )}
        </>
      ) : (
        <View
          style={[
            styles.placeholder,
            { backgroundColor: theme.background, borderColor: theme.border },
          ]}
        >
          <Text
            style={[
              styles.placeholderText,
              { color: theme.secondary, paddingHorizontal: scale(10) },
            ]}
          >
            3D exercise preview coming soon
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 24,
    marginBottom: 18,
  },
  title: {
    fontWeight: '800',
  },
  sets: {
    marginTop: 10,
  },
  videoContainer: {
    width: '100%',
    marginTop: 16,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#000',
    position: 'relative',
  },
  video: {
    width: '100%',
    backgroundColor: '#000',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  loadingText: {
    fontSize: 14,
    fontWeight: '600',
  },
  errorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  errorText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  placeholder: {
    marginTop: 16,
    height: 180,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  placeholderText: {
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  fullscreenButton: {
    paddingVertical: 14,
    marginTop: 14,
    borderRadius: 18,
  },
  fullscreenText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
});
