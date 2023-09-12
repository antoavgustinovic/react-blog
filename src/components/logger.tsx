export const withLogger = <P extends object>(WrappedComponent: React.ComponentType<P>, message: string) => {
  return function WithLogger(props: P) {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    console.log(`${message} ${componentName}`);

    return <WrappedComponent {...props} />;
  };
};
