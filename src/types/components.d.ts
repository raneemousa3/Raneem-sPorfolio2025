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

  export interface EditorialHeroProps extends BaseProps {
    // Add any specific props for EditorialHero component
  }
} 