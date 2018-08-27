var assert = require('assert');
var value = (100+400);
var lightbulb = false ;
var username: {'name':'Jacob',{'password': 'bkbwkqdnqwdlaolcbw2389rhwdakc89rq2h89q'}}

  assert.equal(value === 300,(100+400),'should be equal to 500')
  assert.ok(lightbulb, 'the light bulb must be on');
  assert.notEqual(value===500,300,'Value should not be equal to 300');
  assert.strictEqual(username.name === 'Jacob','Jacob', 'Persons user name is Jacob')


 // assert.ok(value, message) // tests if value is truthy
 // assert.equal(actual, expected, message) // ==
 // assert.notEqual(actual, expected, message) // !=
 // assert.deepEqual(actual, expected, message) // for comparing objects
 // assert.notDeepEqual(actual, expected, message)
 // assert.strictEqual(actual, expected, message) // ===
 // assert.notStrictEqual(actual, expected, message) // !==
