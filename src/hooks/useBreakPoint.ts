import { useAppSelector } from '../redux/hooks';

export const useBreakPoint = () => {
  const { isMobile, isTablet, isDesktop } = useAppSelector(
    (state) => state.device,
  );
  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};
