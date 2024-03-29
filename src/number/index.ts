import type { OpaqueString } from "../string";

declare const opaqueNumberBrand: unique symbol;

export type OpaqueNumber<Type> = number & { [opaqueNumberBrand]: Type };

export type StringifiedNumber<Type> = OpaqueString<Type>;

export function stringifyNumber<Type extends number>(
  number: Type
): StringifiedNumber<Type> {
  return number.toString() as StringifiedNumber<Type>;
}

export function parseNumber<Type extends number>(
  number: StringifiedNumber<Type>
): Type {
  return parseFloat(number) as Type;
}

export function negativeNumber<Type extends number>(number: Type): Type {
  return -number as Type;
}

export function sumNumbers<Type extends number>(...numbers: Type[]): Type {
  return numbers.reduce((a, b) => (a + b) as Type, 0 as Type);
}
