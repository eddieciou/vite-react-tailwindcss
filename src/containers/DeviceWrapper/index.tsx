import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { deviceSlice } from '../../redux/slice/deviceSlice.ts';
import { tailwindVariables } from '../../../tailwind.variables.ts';

interface IDeviceWrapperProps {
  children: React.ReactNode;
}

export const DeviceWrapper = ({ children }: IDeviceWrapperProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let isMobile = true;
    let isTablet = false;
    let isDesktop = false;

    const mobilePoint = parseInt(
      tailwindVariables.theme.screens.mobile.replace('px', ''),
    );
    const tabletPoint = parseInt(
      tailwindVariables.theme.screens.tablet.replace('px', ''),
    );

    if (0 < screenWidth && screenWidth < mobilePoint) {
      isMobile = true;
      isTablet = false;
      isDesktop = false;
    }

    if (mobilePoint <= screenWidth && screenWidth < tabletPoint) {
      isMobile = false;
      isTablet = true;
      isDesktop = false;
    }

    if (tabletPoint <= screenWidth) {
      isMobile = false;
      isTablet = false;
      isDesktop = true;
    }

    dispatch(deviceSlice.actions.setIsMobile(isMobile));
    dispatch(deviceSlice.actions.setIsTablet(isTablet));
    dispatch(deviceSlice.actions.setIsDesktop(isDesktop));
  }, [screenWidth]);

  return <>{children}</>;
};
