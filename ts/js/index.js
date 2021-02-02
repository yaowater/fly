"use strict";
var arr = [1, 2, 3];
console.log("arr", arr);
var arr2 = ["a", "bb", "ccc"];
console.log("arr2", arr2);
var arr3 = [1, 2, 3, 4];
console.log("arr3", arr3);
var arr4 = ["a", "2", "c", "4"];
console.log("arr4", arr4);
// 元组类型（tuple）
var arr5 = ["ts", 3.18, true];
console.log("arr5", arr5);
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log("f", f);
console.log("Flag.error", Flag.error);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 5] = "blue";
    Color[Color["orange"] = 6] = "orange";
})(Color || (Color = {}));
var c = Color.blue;
console.log("c", c);
console.log("Color.orange", Color.orange);
