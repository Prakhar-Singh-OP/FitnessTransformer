import { useWindowDimensions, PixelRatio } from 'react-native';

const GUIDELINE_BASE_WIDTH = 375;

export function useResponsive() {
  const { width, height } = useWindowDimensions();

  const deviceRatio = width / GUIDELINE_BASE_WIDTH;
  const isTablet = width >= 768;

  const scale = (size: number) => Math.round(deviceRatio * size);

  const font = (size: number) => {
    const fontScale = PixelRatio.getFontScale();
    const adjusted = Math.round(deviceRatio * size * fontScale);
    // limit extremes
    return Math.max(10, Math.min(48, adjusted));
  };

  return { width, height, scale, font, isTablet };
}

export default useResponsive;
