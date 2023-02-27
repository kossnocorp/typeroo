declare const opaqueStringBrand: unique symbol;

export type OpaqueString<Type> = string & { [opaqueStringBrand]: Type };
