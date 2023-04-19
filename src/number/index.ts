declare const opaqueNumberBrand: unique symbol;

export type OpaqueNumber<Type> = number & { [opaqueNumberBrand]: Type };
