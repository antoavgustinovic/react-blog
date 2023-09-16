export const HELLO_MESSAGE = 'Hello from';

export const withLogger = <P extends object>(WrappedComponent: React.ComponentType<P>, message: string) => {
  return function withLogger(props: P) {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    console.log(`${message} ${componentName}`);

    return <WrappedComponent {...props} />;
  };
};

export const withHelloLogger = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  withLogger(WrappedComponent, HELLO_MESSAGE);
