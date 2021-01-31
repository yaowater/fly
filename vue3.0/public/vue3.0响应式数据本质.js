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