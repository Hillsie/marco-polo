/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

// Type 'Promise<typeof import("/home/andrew/Documents/05-ResumeAndCode/prequel/src/pages/About")>' is not assignable to type 'Promise<{ default: ComponentType<any>; }>'.
//   Property 'default' is missing in type 'typeof import("/home/andrew/Documents/05-ResumeAndCode/prequel/src/pages/About")' but required in type '{ default: ComponentType<any>; }'.ts(2322)

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export  function ReactLazy<T extends React.ComponentType<any>>(
    factory: () => Promise<{ default: T }>
): React.LazyExoticComponent<T>;
