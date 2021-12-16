"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ExistingExamError = exports.ExamError = void 0;
var ExamError = /** @class */ (function (_super) {
    __extends(ExamError, _super);
    function ExamError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ExamError";
        return _this;
    }
    return ExamError;
}(Error));
exports.ExamError = ExamError;
var ExistingExamError = /** @class */ (function (_super) {
    __extends(ExistingExamError, _super);
    function ExistingExamError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ExistingExamError";
        return _this;
    }
    return ExistingExamError;
}(Error));
exports.ExistingExamError = ExistingExamError;
