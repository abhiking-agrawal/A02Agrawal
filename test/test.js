// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing calculateTempInFahrenheit function with several sets of inputs to check exception handeling', function (assert) {
    assert.throws(function(){ calculateTempInFahrenheit([])},'Array is not allowed');
    assert.throws(function(){ calculateTempInFahrenheit(null)},'Null is restricted');
    assert.throws(function(){ calculateTempInFahrenheit(NaN)},'NaN is restricted');
    assert.throws(function(){ calculateTempInFahrenheit(undefined)},'Undefined values are restricted');
    assert.throws(function(){ calculateTempInFahrenheit("test")},'String is restricted');
});

QUnit.test('Testing calculateTempInFahrenheit function with several set of valid inputs', function (assert) {
    assert.equal(calculateTempInFahrenheit(1),33.8,'1℃ = 33.8℉ check');
    assert.equal(calculateTempInFahrenheit(0),32,'0℃ = 32℉ check');
    assert.equal(calculateTempInFahrenheit(-10),14,'-10℃ = 14℉ check');
});

QUnit.test('Testing calculateTempInCelsius function with several sets of inputs to check exception handeling', function (assert) {
    assert.throws(function(){ calculateTempInCelsius([])},'Array is not allowed');
    assert.throws(function(){ calculateTempInCelsius(null)},'Null is restricted');
    assert.throws(function(){ calculateTempInCelsius(NaN)},'NaN is restricted');
    assert.throws(function(){ calculateTempInCelsius(undefined)},'Undefined values are restricted');
    assert.throws(function(){ calculateTempInCelsius("test")},'String is restricted');
});

QUnit.test('Testing calculateTempInCelsius function with several set of valid inputs', function (assert) {
    assert.equal(calculateTempInCelsius(1),-17.2,'1℉ = -17.2℃ check');
    assert.equal(calculateTempInCelsius(0),-17.8,'0℉ = -17.8℃ check');
    assert.equal(calculateTempInCelsius(-10),-23.3,'-10℉ = -23.3℃ check');
    assert.equal(calculateTempInCelsius(45),7.2,'-10℉ = 7.2℃ check');
});
