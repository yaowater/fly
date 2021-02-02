   // let obj = {
        //     name: 'zs',
        //     age: 18
        // };
        // let state = new Proxy(obj, {
        //     get(obj, key) {
        //         console.log("obj get", obj);
        //         console.log("key get", key);
        //         return obj[key]
        //     },
        //     set(obj, key, value) {
        //         console.log("obj set", obj);
        //         console.log("key set", key);
        //         console.log("value set", value);
        //         obj[key]=value
        //         console.log("更新UI界面");

        //     }
        // })
        // console.log("state11111111111",state);
        // // console.log("state.name",state.name);
        // state.name="aaa"
        // console.log("state2222222",state);
        
        let arr=[11,22,33]
        let state = new Proxy(arr, {
            get(obj, key) {
                console.log("obj get", obj);
                console.log("key get", key);
                return obj[key]
            },
            set(obj, key, value) {
                console.log("obj set", obj);
                console.log("key set", key);
                console.log("value set", value);
                obj[key] = value
                console.log("更新UI界面");
                return true

            }
        })

        // console.log('state[1]',state[1]);
        state.push(44)


          // let obj = {
        //     name: 'zs',
        //     age: 18
        // };
        // let state = new Proxy(obj, {
        //     get(obj, key) {
        //         console.log("obj get", obj);
        //         console.log("key get", key);
        //         return obj[key]
        //     },
        //     set(obj, key, value) {
        //         console.log("obj set", obj);
        //         console.log("key set", key);
        //         console.log("value set", value);
        //         obj[key]=value
        //         console.log("更新UI界面");

        //     }
        // })
        // console.log("state11111111111",state);
        // // console.log("state.name",state.name);
        // state.name="aaa"
        // console.log("state2222222",state);

        // let arr=[11,22,33]
        // let state = new Proxy(arr, {
        //     get(obj, key) {
        //         console.log("obj get", obj);
        //         console.log("key get", key);
        //         return obj[key]
        //     },
        //     set(obj, key, value) {
        //         console.log("obj set", obj);
        //         console.log("key set", key);
        //         console.log("value set", value);
        //         obj[key] = value
        //         console.log("更新UI界面");
        //         return true

        //     }
        // })

        // // console.log('state[1]',state[1]);
        // state.push(44)

        // function shallowRef(val) {
        //     return shallowReactive({ value: val })

        // }

        // function shallowReactive(obj) {
        //     return new Proxy(obj, {
        //         get(obj, key) {
        //             return obj[key]
        //         },
        //         set(obj, key, val) {
        //             obj[key] = val
        //             console.log("更新ui界面");
        //             return true
        //         }
        //     })
        // }

        // let obj = {
        //     a: "a",
        //     gf: {
        //         b: "b",
        //         f: {
        //             c: "c",
        //             s: {
        //                 d: "d",
        //             },
        //         },
        //     }
        // }

        // let state = shallowReactive(obj)
        // state.a = "1";
        // state.gf.b = "2";
        // state.gf.f.c = "3";
        // state.gf.f.s.d = "4";


        // console.log("obj", obj);

        // let state = shallowRef(obj)

        // state.value = {
        //     a: 1,
        //     gf: {
        //         b: 2,
        //         f: {
        //             c: 3,
        //             s: {
        //                 d: 4,
        //             },
        //         },
        //     }
        // }

        // function ref(val){
        //     return reactive({value:val})
        // }

        // function reactive(obj) {
        //     if (typeof obj === 'object') {
        //         if (obj instanceof Array) {
        //             obj.forEach((item, index) => {
        //                 if (typeof item === 'object') {
        //                     obj[index] = reactive(item)
        //                 }
        //             })
        //         } else {
        //             for (let key in obj) {
        //                 let item = obj[key]
        //                 if (typeof item === 'object') {
        //                     obj[key] = reactive(item)
        //                 }
        //             }

        //         }
        //         return new Proxy(obj, {
        //             get(obj, key) {
        //                 return obj[key]
        //             },
        //             set(obj, key, val) {
        //                 obj[key] = val
        //                 console.log("更新ui界面");
        //                 return true
        //             }
        //         })

        //     } else {
        //         console.warn(`${obj} is not object`);
        //     }

        // }


        // let obj = {
        //     a: "a",
        //     gf: {
        //         b: "b",
        //         f: {
        //             c: "c",
        //             s: {
        //                 d: "d",
        //             },
        //         },
        //     }
        // }
        // let state=reactive(obj)
        // state.a = "1";
        // state.gf.b = "2";
        // state.gf.f.c = "3";
        // state.gf.f.s.d = "4";

        // let arr=[{id:1,name:'bd'},{id:2,name:'as'}]
        // let state=reactive(arr)
        // state[0].name="sssd"
        // state[1].id=66




        function shallowReadonly(obj) {
            return new Proxy(obj, {
                get(obj, key) {
                    return obj[key]
                },
                set(obj, key, val) {
                    // obj[key] = val
                    // console.log("更新ui界面");
                    // return true
                    console.warn(`${key}是只读的`);
                }
            })
        }

        let obj = {
            a: "a",
            gf: {
                b: "b",
                f: {
                    c: "c",
                    s: {
                        d: "d",
                    },
                },
            }
        }

        let state=shallowReadonly(obj)
        // state.a=22
        state.gf.b=2222