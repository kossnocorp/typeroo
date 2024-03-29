import assert from "assert";
import { parseJSON, ParsedJSON, StringifiedJSON, stringifyJSON } from ".";
import { assertType, IsEqual } from "../assert";
import { OpaqueString } from "../string";

describe("JSON module", () => {
  describe("ParsedJSON", () => {
    describe("objects with toJSON property", () => {
      it("stringifies objects with toJSON property", () => {
        type ParsedType = ParsedJSON<Date>;
        assertType<IsEqual<ParsedType, string>>(true);
      });

      it("stringifies object with toJSON property fields", () => {
        interface User {
          name: string;
          birthday: Date;
        }
        type ParsedType = ParsedJSON<User>;
        assertType<
          IsEqual<
            ParsedType,
            {
              name: string;
              birthday: string;
            }
          >
        >(true);
      });
    });

    describe("strings, booleans and nulls", () => {
      it("preserves strings, booleans and nulls", () => {
        type ParsedString = ParsedJSON<string>;
        assertType<IsEqual<ParsedString, string>>(true);

        type ParsedBoolean = ParsedJSON<boolean>;
        assertType<IsEqual<ParsedBoolean, boolean>>(true);

        type ParsedNull = ParsedJSON<null>;
        assertType<IsEqual<ParsedNull, null>>(true);
      });

      it("preserves string, boolean and null fields", () => {
        interface User {
          name: string;
          verified: boolean;
          nope: null;
        }
        type ParsedType = ParsedJSON<User>;
        assertType<IsEqual<ParsedType, User>>(true);
      });

      it("converts strings and booleans created with constructors", () => {
        interface User {
          name: String;
          verified: Boolean;
        }
        type ParsedType = ParsedJSON<User>;
        assertType<
          IsEqual<
            ParsedType,
            {
              name: string;
              verified: boolean;
            }
          >
        >(true);
      });
    });

    describe("opaque types", () => {
      it("preserves opaque types", () => {
        interface User {
          name: string;
        }
        type ParsedString = ParsedJSON<OpaqueString<User>>;
        assertType<IsEqual<ParsedString, OpaqueString<User>>>(true);

        type ParsedBoolean = ParsedJSON<boolean>;
        assertType<IsEqual<ParsedBoolean, boolean>>(true);

        type ParsedNull = ParsedJSON<null>;
        assertType<IsEqual<ParsedNull, null>>(true);
      });
    });

    describe("numbers", () => {
      it("preserves numbers", () => {
        type ParsedType = ParsedJSON<number>;
        assertType<IsEqual<ParsedType, number>>(true);
      });

      it("converts number created with constructors", () => {
        interface Data {
          count: Number;
        }
        type ParsedType = ParsedJSON<Data>;
        assertType<IsEqual<ParsedType, { count: number }>>(true);
      });

      describe("when StrictNumber is true", () => {
        it("adds null to numbers", () => {
          type ParsedType = ParsedJSON<number, false, true>;
          assertType<IsEqual<ParsedType, number | null>>(true);
        });

        it("adds null to number fields", () => {
          interface Data {
            count: number;
          }
          type ParsedType = ParsedJSON<Data, false, true>;
          assertType<IsEqual<ParsedType, { count: number | null }>>(true);
        });

        it("converts number created with constructors", () => {
          interface Data {
            count: Number;
          }
          type ParsedType = ParsedJSON<Data, false, true>;
          assertType<IsEqual<ParsedType, { count: number | null }>>(true);
        });
      });
    });

    describe("undefineds, functions and symbols", () => {
      it("omits function and symbol fields", () => {
        interface Data {
          uid: string;
          symbol: Symbol;
          function: Function;
          undefined: undefined;
        }
        type ParsedType = ParsedJSON<Data>;
        assertType<
          IsEqual<
            ParsedType,
            {
              uid: string;
              undefined: undefined;
            }
          >
        >(true);
      });

      describe("when StrictUndefined is true", () => {
        it("omits undefined, function and symbol fields", () => {
          interface Data {
            uid: string;
            symbol: Symbol;
            function: Function;
            undefined: undefined;
          }
          type ParsedType = ParsedJSON<Data, true>;
          assertType<
            IsEqual<
              ParsedType,
              {
                uid: string;
              }
            >
          >(true);
        });
      });
    });

    describe("objects", () => {
      it("deeply process objects", () => {
        interface User {
          nickname: string;
          personal: {
            name: string;
            birthday: Date;
          };
        }
        type ParsedType = ParsedJSON<User>;
        assertType<
          IsEqual<
            ParsedType,
            {
              nickname: string;
              personal: {
                name: string;
                birthday: string;
              };
            }
          >
        >(true);
      });
    });

    describe("arrays", () => {
      it("process arrays", () => {
        type ParsedType = ParsedJSON<Array<string | boolean>>;
        assertType<IsEqual<ParsedType, Array<string | boolean>>>(true);
      });

      it("process array fields", () => {
        interface Data {
          mixed: Array<string | boolean | null>;
        }
        type ParsedType = ParsedJSON<Data>;
        assertType<
          IsEqual<
            ParsedType,
            {
              mixed: Array<string | boolean | null>;
            }
          >
        >(true);
      });

      it("stringifies array items with toJSON property", () => {
        type ParsedType = ParsedJSON<Array<boolean | Date>>;
        assertType<IsEqual<ParsedType, Array<boolean | string>>>(true);
      });

      it("process objects items", () => {
        interface User {
          name: string;
          birthday: Date;
        }
        type ParsedType = ParsedJSON<Array<boolean | User>>;
        assertType<
          IsEqual<
            ParsedType,
            Array<
              | boolean
              | {
                  name: string;
                  birthday: string;
                }
            >
          >
        >(true);
      });

      describe("with numbers", () => {
        it("preserves number items", () => {
          type ParsedTypeStrictNumber = ParsedJSON<Array<boolean | number>>;
          assertType<IsEqual<ParsedTypeStrictNumber, Array<boolean | number>>>(
            true
          );
        });

        it("adds null to number items if StrictNumber is true", () => {
          type ParsedTypeStrictNumber = ParsedJSON<
            Array<boolean | number>,
            false,
            true
          >;
          assertType<
            IsEqual<ParsedTypeStrictNumber, Array<boolean | number | null>>
          >(true);
        });
      });

      describe("with undefineds, functions and symbols", () => {
        it("replaces functions and symbols with null", () => {
          type ParsedType = ParsedJSON<
            Array<boolean | undefined | Function | Symbol>
          >;
          assertType<IsEqual<ParsedType, Array<boolean | undefined | null>>>(
            true
          );
        });

        it("replaces undefineds, functions and symbols with null if StrictUndefined is true", () => {
          type ParsedType = ParsedJSON<
            Array<boolean | undefined | Function | Symbol>,
            true
          >;
          assertType<IsEqual<ParsedType, Array<boolean | null>>>(true);
        });
      });
    });

    describe("tuples", () => {
      it("preserves tuple with 1 element", () => {
        type ParsedType = ParsedJSON<readonly [string]>;
        assertType<IsEqual<ParsedType, readonly [string]>>(true);
      });

      it("preserves tuple with 2 elements", () => {
        type ParsedType = ParsedJSON<readonly [boolean, string]>;
        assertType<IsEqual<ParsedType, readonly [boolean, string]>>(true);
      });

      it("preserves tuple with 3 elements", () => {
        type ParsedType = ParsedJSON<readonly [boolean, string, number]>;
        assertType<IsEqual<ParsedType, readonly [boolean, string, number]>>(
          true
        );
      });

      it("preserves tuple with 4 elements", () => {
        type ParsedType = ParsedJSON<
          readonly [boolean, string, number, undefined]
        >;
        assertType<
          IsEqual<ParsedType, readonly [boolean, string, number, undefined]>
        >(true);
      });

      it("preserves tuple with 5 elements", () => {
        type ParsedType = ParsedJSON<
          readonly [boolean, string, number, undefined, number]
        >;
        assertType<
          IsEqual<
            ParsedType,
            readonly [boolean, string, number, undefined, number]
          >
        >(true);
      });

      it("preserves tuple with 6 elements", () => {
        type ParsedType = ParsedJSON<
          readonly [boolean, string, number, undefined, number, string]
        >;
        assertType<
          IsEqual<
            ParsedType,
            readonly [boolean, string, number, undefined, number, string]
          >
        >(true);
      });

      it("preserves tuple with 7 elements", () => {
        type ParsedType = ParsedJSON<
          readonly [boolean, string, number, undefined, number, string, boolean]
        >;
        assertType<
          IsEqual<
            ParsedType,
            readonly [
              boolean,
              string,
              number,
              undefined,
              number,
              string,
              boolean
            ]
          >
        >(true);
      });

      it("preserves tuple with 8 elements", () => {
        type ParsedType = ParsedJSON<
          readonly [
            boolean,
            string,
            number,
            undefined,
            number,
            string,
            boolean,
            string
          ]
        >;
        assertType<
          IsEqual<
            ParsedType,
            readonly [
              boolean,
              string,
              number,
              undefined,
              number,
              string,
              boolean,
              string
            ]
          >
        >(true);
      });

      it("preserves tuple with 9 elements", () => {
        type ParsedType = ParsedJSON<
          readonly [
            boolean,
            string,
            number,
            undefined,
            number,
            string,
            boolean,
            string,
            number
          ]
        >;
        assertType<
          IsEqual<
            ParsedType,
            readonly [
              boolean,
              string,
              number,
              undefined,
              number,
              string,
              boolean,
              string,
              number
            ]
          >
        >(true);
      });

      it("preserves tuple with 10 elements", () => {
        type ParsedType = ParsedJSON<
          readonly [
            boolean,
            string,
            number,
            undefined,
            number,
            string,
            boolean,
            string,
            number,
            undefined
          ]
        >;
        assertType<
          IsEqual<
            ParsedType,
            readonly [
              boolean,
              string,
              number,
              undefined,
              number,
              string,
              boolean,
              string,
              number,
              undefined
            ]
          >
        >(true);
      });
    });

    describe("classes", () => {
      it("simplifies class instances", () => {
        class Rectangle {
          width: number;
          height: number;

          constructor(height: number, width: number) {
            this.height = height;
            this.width = width;
          }
          area() {
            return this.height * this.width;
          }
        }

        interface Data {
          react: Rectangle;
          Rectangle: typeof Rectangle;
        }
        type ParsedType = ParsedJSON<Data>;
        assertType<
          IsEqual<
            ParsedType,
            {
              react: {
                width: number;
                height: number;
              };
            }
          >
        >(true);
      });
    });

    describe("misc objects", () => {
      it("converts Map to {}", () => {
        interface Data {
          map: Map<any, any>;
        }
        type ParsedType = ParsedJSON<Data>;
        assertType<IsEqual<ParsedType, { map: {} }>>(true);
      });

      it("converts WeakMap to {}", () => {
        interface Data {
          map: WeakMap<any, any>;
        }
        type ParsedType = ParsedJSON<Data>;
        assertType<IsEqual<ParsedType, { map: {} }>>(true);
      });

      it("converts Set to {}", () => {
        interface Data {
          set: Set<any>;
        }
        type ParsedType = ParsedJSON<Data>;
        assertType<IsEqual<ParsedType, { set: {} }>>(true);
      });

      it("converts WeakSet to {}", () => {
        interface Data {
          set: WeakSet<any>;
        }
        type ParsedType = ParsedJSON<Data>;
        assertType<IsEqual<ParsedType, { set: {} }>>(true);
      });
    });
  });

  type Abc = { [char: string]: number };
  const abc: Abc = { a: 1, b: 2 };

  describe("stringify", () => {
    it("stringifies an object to JSON", () => {
      const json = stringifyJSON(abc);
      assertType<IsEqual<StringifiedJSON<Abc>, typeof json>>(true);
      assert.deepStrictEqual(json, '{"a":1,"b":2}');
    });

    describe("undefineds, functions and symbols", () => {
      it("returns undefined if the argument is undefined", () => {
        const result = stringifyJSON(undefined);
        assertType<IsEqual<undefined, typeof result>>(true);
        assert(result === undefined);
      });

      it("returns undefined if the argument is a function", () => {
        const result = stringifyJSON(() => {});
        assertType<IsEqual<undefined, typeof result>>(true);
        assert(result === undefined);
      });

      it("returns undefined if the argument is a symbol", () => {
        const result = stringifyJSON(Symbol("nope"));
        assertType<IsEqual<undefined, typeof result>>(true);
        assert(result === undefined);
      });
    });

    describe("opaque types", () => {
      it("returns opaque type if the argument is a opaque type", () => {
        interface User {
          name: string;
        }
        const userId = "test" as OpaqueString<User>;
        const result = stringifyJSON(userId);
        assertType<IsEqual<StringifiedJSON<OpaqueString<User>>, typeof result>>(
          true
        );
        assert(result === "test");
      });
    });
  });

  describe("parse", () => {
    it("parses JSON to an object", () => {
      const object = parseJSON(stringifyJSON(abc)!);
      assertType<IsEqual<ParsedJSON<Abc>, typeof object>>(true);
      assert.deepStrictEqual(object, abc);
    });
  });
});
