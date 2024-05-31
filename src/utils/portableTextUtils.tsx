import { PortableTextComponents } from '@portabletext/react';

// https://github.com/portabletext/react-portabletext?tab=readme-ov-file#available-components

export const components: PortableTextComponents = {
  marks: {
    b: ({ children }) => <b>{children}</b>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <a href={value?.href} target={target} rel={target}>
          {children}
        </a>
      );
    },
  },
  list: {
    // Common list types
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    // Custom lists
    checkmarks: ({ children }) => <ol>{children}</ol>,
  },
};
