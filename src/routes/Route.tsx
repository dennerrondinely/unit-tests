import { ElementType } from 'react';
import { Route, RouteProps } from 'react-router-dom';

type RouteWrapperProps = RouteProps & {
  component: ElementType;
  isPrivate?: boolean;
};

export default function RouteWrapper({
  component: Component,
  ...rest
}: RouteWrapperProps) {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
