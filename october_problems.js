// Your company delivers breakfast via autonomous quadcopter drones. And something mysterious has happened.
// Each breakfast delivery is assigned a unique ID, a positive integer. When one of the company's 100
// drones takes off with a delivery, the delivery's ID is added to an array, delivery_id_confirmations.
// When the drone comes back and lands, the ID is again added to the same array.

//After breakfast this morning there were only 99 drones on the tarmac. One of the drones never made it
//back from a delivery. We suspect a secret agent from Amazon placed an order and stole one of our patented drones.
//To track them down, we need to find their delivery ID.

//Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.


//So with this problem its all about run time and using the proper sorting aalgorithm.

var arrayID = [9, 9, 111, 30, 30, 54, 54, 67 ,67 , 57 ,57 ,82 ,82 ,93 ,93 , 2, 2, 3, 3, 4, 4, 5, 5,7, 7]; //number 111 can be our missing drone
var sorted_arr = arrayID.sort(function(a, b){return a-b}); // So we first need to sort out the array
console.log(sorted_arr)
var drone = []; // to figure out which drone amazon has stolen from us!

for (var i = 0; i < arrayID.length - 1; i++) {
    if (sorted_arr[i + 1] != sorted_arr[i]) {
        drone.push(sorted_arr[i]);
    }
}
console.log(drone)




//I'm making a search engine called MillionGazillion™.
//I wrote a crawler that visits web pages, stores a few keywords in a database, and follows links to other web pages.
//I noticed that my crawler was wasting a lot of time visiting the same pages over and over, so I made a hash table
//visited where I'm storing URLs I've already visited. Now the crawler only visits a URL if it hasn't already been visited.
//Thing is, the crawler is running on my old desktop computer in my parents' basement (where I totally don't live anymore),
//and it keeps running out of memory because visited is getting so huge.
//How can I trim down the amount of space taken up by visited?

I honestly did not know any kind of solution for this, other then maybe shortening the urls without http/www/.com..etc.. to
take up less memory. So i went on to the hint.

The first hint did basically what i said, it took off the www and stored it seperatley, like [www.][google.com]. So suprisingly
my first guess was close to the hint.

The actual solution suggested using a trie, which i had never heard of before. But is an interesting but semi-complicated
way of saving that data.



// You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the
// insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of
// cakes—the vault of the Queen of England.While Queen Elizabeth has a limited number of types of cake, she has
// an unlimited supply of each type.
// Each type of cake has a weight and a value, stored in tuples ↴ with two indices:
// An integer representing the weight of the cake in kilograms
// An integer representing the monetary value of the cake in British pounds
// For example:
//
//   # weighs 7 kilograms and has a value of 160 pounds
// (7, 160)
//
// # weighs 3 kilograms and has a value of 90 pounds
// (3, 90)
//
// You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.
//
// Write a function max_duffel_bag_value() that takes an array of cake type tuples and a weight capacity, and
// returns the maximum monetary value the duffel bag can hold.
// For example:
//
//   cake_tuples = [(7, 160), (3, 90), (2, 15)]
// capacity    = 20
//
// max_duffel_bag_value(cake_tuples, capacity)
// # returns 555 (6 of the middle type of cake and 1 of the last type of cake)
//
// Weights and values may be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing or
// duffel bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous about
// keeping our algorithms flexible and comprehensive.

So this ones kind of tricky, because i at first thought that why dont we have one of the first cake? but then i realized
the second cake is worth more, even at 6 kilograms it would be worth 180.So similar to how when we go grocery shopping
we want to find the best price per pound we need to do that here first as well.

function max_duffel_bag_value(cake_tuples,capacity) {
  var max_values_at_capacities = [0] * (weight_capacity + 1)

 for(current_capacity in xrange(weight_capacity + 1)){
     var current_max_value = 0

     for(cake_weight, cake_value in cake_tuples){
         if (cake_weight == 0 and cake_value != 0){
             return INFINITY
           }
         if (cake_weight <= current_capacity){

             max_value_using_cake = cake_value + max_values_at_capacities[current_capacity - cake_weight]

             current_max_value = max(max_value_using_cake, current_max_value)
            }
            }
           }
     max_values_at_capacities[current_capacity] = current_max_value

 return max_values_at_capacities[weight_capacity]
}
