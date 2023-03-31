import { useEffect } from 'react';

/**
 * Change the document title on component mount.
 */
export default function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  },[title]);
}