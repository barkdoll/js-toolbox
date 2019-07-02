// RegEx dollar-sign combo replacement expressions:

  // $` is a special variable which holds the contents before the match.
  // $& is similar, but holds what was matched
  // $' holds what was after the match.

// In the string "huge dinosaur", /\w+$/ matches 'dinosaur'. So the variable contents are:

  // $` => "huge "
  // $& => "dinosaur"
  // $' => ""


if( ! RegExp.escape){
  RegExp.escape = function(str) {
    return String(str).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
  };
}
