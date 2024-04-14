#! /usr/bin/env node
// Solution # 16
// More guest: you just found a bigger dinner table, so now more spaces is availble think of these more guest to invite to dinner.
// Start with your program from exercise 15. Add a print statement to the end of your program informing people that you found a 
// bigger dinner table.
// Add one new guest to the begining of your array
// Add one new guest to the middle of your array
// Use append to add one new guest to the end of your list
// Print a new set of invitation messages, one for each person in your list.

let guest_list: string[] = ['Adeel', 'Aisha', 'Aiza', 'fatima'];
let not_present: string = "Adeel";
let new_guest: string = "Kashif";
guest_list[guest_list.indexOf(not_present)] = new_guest
console.log(guest_list)
//guest_list.map((items) =>
  //  console.log(`Dear ${items},I found a bigger dinner table, so i am invited more peoples `)
   // )
//add one new guest to the begining of your array 
    let guestBeg: string = "Imran";
    guest_list.unshift(guestBeg)
    console.log(guest_list)

    // Add one new guest to the middle of your array
    let midGuest: string = "Babar"
let MiddleIndex = guest_list.length/3
guest_list.splice(MiddleIndex,0,midGuest)
console.log(guest_list)

// Use append to add one new guest to the end of your list
guest_list.push('shahzad')
console.log(guest_list)

// Print a new set of invitation messages, one for each person in your list.
guest_list.map((items) =>
console.log(`Dear ${items}, You are invited in the more people catagory list on dinner`)
)


