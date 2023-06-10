let isInterntEnabled = true
// camel case
let is_gps_enabled = true
// snake case
console.log("can i navigate using Google map : " +( isInterntEnabled && is_gps_enabled))
let ewallet = 0
let iscreditcardlinked = false
console.log("can i book a cab : " +(ewallet>0 || iscreditcardlinked))


// String Concatenation
console.log("Is Internet not Enabled: " + !isInterntEnabled)

// String Interpolation - Use Backtick
console.log(`Is Internet not Enabled: ${!isInterntEnabled}`)