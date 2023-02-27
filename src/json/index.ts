import { OmitKeys } from "../object";
import { OpaqueString } from "../string";

export type StringifiedJSON<Type> = OpaqueString<Type>;

export type ParsedJSON<
  Type,
  StrictUndefined = false,
  StrictNumber = false
> = Type extends undefined
  ? StrictUndefined extends true
    ? null
    : undefined
  : Type extends Function | Symbol
  ? null
  : Type extends { toJSON: () => string }
  ? string
  : Type extends string | boolean | null
  ? Type
  : Type extends String
  ? string
  : Type extends Boolean
  ? boolean
  : Type extends number | Number
  ? StrictNumber extends true
    ? number | null
    : number
  : Type extends readonly [infer ItemType1]
  ? readonly [ParsedJSON<ItemType1, StrictUndefined, StrictNumber>]
  : Type extends readonly [infer ItemType1, infer ItemType2]
  ? readonly [
      ParsedJSON<ItemType1, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType2, StrictUndefined, StrictNumber>
    ]
  : Type extends readonly [infer ItemType1, infer ItemType2, infer ItemType3]
  ? readonly [
      ParsedJSON<ItemType1, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType2, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType3, StrictUndefined, StrictNumber>
    ]
  : Type extends readonly [
      infer ItemType1,
      infer ItemType2,
      infer ItemType3,
      infer ItemType4
    ]
  ? readonly [
      ParsedJSON<ItemType1, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType2, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType3, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType4, StrictUndefined, StrictNumber>
    ]
  : Type extends readonly [
      infer ItemType1,
      infer ItemType2,
      infer ItemType3,
      infer ItemType4,
      infer ItemType5
    ]
  ? readonly [
      ParsedJSON<ItemType1, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType2, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType3, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType4, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType5, StrictUndefined, StrictNumber>
    ]
  : Type extends readonly [
      infer ItemType1,
      infer ItemType2,
      infer ItemType3,
      infer ItemType4,
      infer ItemType5,
      infer ItemType6
    ]
  ? readonly [
      ParsedJSON<ItemType1, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType2, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType3, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType4, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType5, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType6, StrictUndefined, StrictNumber>
    ]
  : Type extends readonly [
      infer ItemType1,
      infer ItemType2,
      infer ItemType3,
      infer ItemType4,
      infer ItemType5,
      infer ItemType6,
      infer ItemType7
    ]
  ? readonly [
      ParsedJSON<ItemType1, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType2, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType3, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType4, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType5, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType6, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType7, StrictUndefined, StrictNumber>
    ]
  : Type extends readonly [
      infer ItemType1,
      infer ItemType2,
      infer ItemType3,
      infer ItemType4,
      infer ItemType5,
      infer ItemType6,
      infer ItemType7,
      infer ItemType8
    ]
  ? readonly [
      ParsedJSON<ItemType1, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType2, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType3, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType4, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType5, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType6, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType7, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType8, StrictUndefined, StrictNumber>
    ]
  : Type extends readonly [
      infer ItemType1,
      infer ItemType2,
      infer ItemType3,
      infer ItemType4,
      infer ItemType5,
      infer ItemType6,
      infer ItemType7,
      infer ItemType8,
      infer ItemType9
    ]
  ? readonly [
      ParsedJSON<ItemType1, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType2, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType3, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType4, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType5, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType6, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType7, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType8, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType9, StrictUndefined, StrictNumber>
    ]
  : Type extends readonly [
      infer ItemType1,
      infer ItemType2,
      infer ItemType3,
      infer ItemType4,
      infer ItemType5,
      infer ItemType6,
      infer ItemType7,
      infer ItemType8,
      infer ItemType9,
      infer ItemType10
    ]
  ? readonly [
      ParsedJSON<ItemType1, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType2, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType3, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType4, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType5, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType6, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType7, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType8, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType9, StrictUndefined, StrictNumber>,
      ParsedJSON<ItemType10, StrictUndefined, StrictNumber>
    ]
  : Type extends Array<infer ItemType>
  ? Array<ParsedJSON<ItemType, StrictUndefined, StrictNumber>>
  : Type extends { [Symbol.toStringTag]: string }
  ? {}
  : Type extends {}
  ? {
      [Key in OmitKeys<
        Type,
        StrictUndefined extends true
          ? undefined | Function | Symbol
          : Function | Symbol
      >]: ParsedJSON<Type[Key], StrictUndefined, StrictNumber>;
    }
  : Type;

export function stringify<Type>(
  object: Type
): Type extends undefined | Function | Symbol
  ? undefined
  : StringifiedJSON<Type> {
  // @ts-ignore JSON.stringify actually returns undefined but TypeScript doesn't know that
  return JSON.stringify(object);
}

export function parse<Type>(json: StringifiedJSON<Type>): ParsedJSON<Type> {
  return JSON.parse(json.toString());
}
