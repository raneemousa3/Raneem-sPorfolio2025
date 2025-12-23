declare module 'components' {
  import { FC, ReactNode } from 'react';

  export interface BaseProps {
    children?: ReactNode;
    className?: string;
  }

  export interface NavbarProps extends BaseProps {
    // Add any specific props for Navbar component
  }

  export interface ProjectsProps extends BaseProps {
    // Add any specific props for Projects component
  }

  export interface EditorialCoverHeroProps extends BaseProps {
    imageUrl?: string;
    isVisible?: boolean;
    isProcessing?: boolean;
    handleImageUpload?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    fileInputRef?: React.RefObject<HTMLInputElement>;
    error?: string;
  }

  export interface ContactProps extends BaseProps {
    // Add any specific props for Contact component
  }
} 