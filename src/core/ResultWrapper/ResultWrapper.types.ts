// Generated with util/create-component.js

export type Result<T> = { data: T | undefined; error: string | undefined };

export interface ResultWrapperProps {
  result: Result<any>;
  className?: string;
  timeTillSpinner?: number;
}
