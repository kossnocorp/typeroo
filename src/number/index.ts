import type { OpaqueString } from "../string";

declare const opaqueNumberBrand: unique symbol;

export type OpaqueNumber<Type> = number & { [opaqueNumberBrand]: Type };

export type StringifiedNumber<Type> = OpaqueString<Type>;

export function stringify<Type extends number>(
  number: Type
): StringifiedNumber<Type> {
  return number.toString() as StringifiedNumber<Type>;
}

export function parse<Type extends number>(
  number: StringifiedNumber<Type>
): Type {
  return parseFloat(number) as Type;
}