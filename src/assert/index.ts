export function assertType<Type>(_: Type) {}

export type IsEqual<TypeA, TypeB> = Exclude<TypeA, TypeB> extends never
  ? Exclude<TypeB, TypeA> extends never
    ? true
    : false
  : false;
