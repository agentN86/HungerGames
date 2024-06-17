var time = 1

var characters = {
    "district1": {
        "male": {
            "image": "./images/D1_Male.png",
            "name": "Marvel",
            "alive": true,
            "kills": 0,
            "victims": [],
            "location": "cornucopia",
            "inventory": [],
        },
        "female": {
            "image": "./images/D1_Female.png",
            "name": "Glimmer",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        }
    },
    "district2": {
        "male": {
            "image": "./images/D2_Male.png",
            "name": "Cato",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        },
        "female": {
            "image": "./images/D2_Female.png",
            "name": "Clove",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        }
    },
    "district3": {
        "male": {
            "image": "./images/D3_Male.png",
            "name": "District 3 Male",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        },
        "female": {
            "image": "./images/D3_Female.png",
            "name": "District 3 Female",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        }
    },
    "district4": {
        "male": {
            "image": "./images/D4_Male.png",
            "name": "District 4 Male",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        },
        "female": {
            "image": "./images/D4_Female.png",
            "name": "District 4 Female",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        }
    },
    "district5": {
        "male": {
            "image": "./images/D5_Male.png",
            "name": "District 5 Male",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        },
        "female": {
            "image": "./images/D5_Female.png",
            "name": "Foxface",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        }
    },
    "district6": {
        "male": {
            "image": "./images/D6_Male.png",
            "name": "Jason",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        },
        "female": {
            "image": "./images/D6_Female.png",
            "name": "District 6 Female",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        }
    },
    "district7": {
        "male": {
            "image": "./images/D7_Male.png",
            "name": "District 7 Male",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        },
        "female": {
            "image": "./images/D7_Female.png",
            "name": "District 7 Female",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        }
    },
    "district8": {
        "male": {
            "image": "./images/D8_Male.png",
            "name": "District 8 Male",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        },
        "female": {
            "image": "./images/D8_Female.png",
            "name": "District 8 Female",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        }
    },
    "district9": {
        "male": {
            "image": "./images/D9_Male.png",
            "name": "District 9 Male",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        },
        "female": {
            "image": "./images/D9_Female.png",
            "name": "District 9 Female",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        }
    },
    "district10": {
        "male": {
            "image": "./images/D10_Male.png",
            "name": "District 10 Male",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        },
        "female": {
            "image": "./images/D10_Female.png",
            "name": "District 10 Female",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        }
    },
    "district11": {
        "male": {
            "image": "./images/D11_Male.png",
            "name": "Rue",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        },
        "female": {
            "image": "./images/D11_Female.png",
            "name": "Thresh",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        }
    },
    "district12": {
        "male": {
            "image": "./images/D12_Male.png",
            "name": "Peeta",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        },
        "female": {
            "image": "./images/D12_Female.png",
            "name": "Katniss",
            "alive": true,
            "kills": 0,
            "location": "cornucopia",
            "inventory": [],
            "victims": [],
        }
    },
}

function setStatus(type) {
    for (district = 1; district <= 12; district++) {
        // Sets Male/Female Images

        document.getElementById('status_D' + district + '_image_male').src = characters["district" + district].male.image
        document.getElementById('status_D' + district + '_image_female').src = characters["district" + district].female.image

        // Sets Male/Female Names

        document.getElementById('status_D' + district + '_name_male').innerText = characters["district" + district].male.name
        document.getElementById('status_D' + district + '_name_female').innerText = characters["district" + district].female.name

        // Sets Male/Female Kills
        if (characters["district" + district].male.kills == 0) {
            document.getElementById('status_D' + district + '_kills_male').innerText = ""
        } else {
            document.getElementById('status_D' + district + '_kills_male').innerText = characters["district" + district].male.kills + " Kill(s)"
        }

        if (characters["district" + district].female.kills == 0) {
            document.getElementById('status_D' + district + '_kills_female').innerText = ""
        } else {
            document.getElementById('status_D' + district + '_kills_female').innerText = characters["district" + district].female.kills + " Kill(s)"
        }


        // Sets Male/Female Status

        if (characters["district" + district].male.alive == true) {
            document.getElementById('status_D' + district + '_status_male').innerText = "Alive"

            document.getElementById('status_D' + district + '_image_male').classList.remove("dead")
            //document.getElementById('status_D' + district + '_image_male').classList.add("dead")

            document.getElementById('status_D' + district + '_status_male').color = "#74f424"
        } else {
            document.getElementById('status_D' + district + '_status_male').innerText = "Deceased"

            document.getElementById('status_D' + district + '_image_male').classList.remove("dead")
            document.getElementById('status_D' + district + '_image_male').classList.add("dead")

            document.getElementById('status_D' + district + '_status_male').color = "#ff6666"
        }

        if (characters["district" + district].female.alive == true) {
            document.getElementById('status_D' + district + '_status_female').innerText = "Alive"

            document.getElementById('status_D' + district + '_image_female').classList.remove("dead")
            //document.getElementById('status_D' + district + '_image_female').classList.add("dead")

            document.getElementById('status_D' + district + '_status_female').color = "#74f424"
        } else {
            document.getElementById('status_D' + district + '_status_female').innerText = "Deceased"

            document.getElementById('status_D' + district + '_image_female').classList.remove("dead")
            document.getElementById('status_D' + district + '_image_female').classList.add("dead")

            document.getElementById('status_D' + district + '_status_female').color = "#ff6666"
        }

    }

    document.getElementById('status').style.display = "block"
    if (type == "reaping") {
        document.getElementById('startbloodbath').style.display = "block"
        document.getElementById('backtoBloodbath').style.display = "none"
    } else if (type == "bloodbath") {
        document.getElementById('startbloodbath').style.display = "none"
        document.getElementById('backtoBloodbath').style.display = "block"

        document.getElementById('bloodbath').style.display = "none"
    } else {
        document.getElementById('startbloodbath').style.display = "none"
        document.getElementById('backtoBloodbath').style.display = "none"
    }

}

function readDisclaimer() {

    document.getElementById('disclaimer').style.display = "none"
    document.getElementsByClassName('statusTitle')[0].innerText = "The Reaping"
    setStatus("reaping")

}

function decide(type) {
    if (type == "bloodbath") {
        // Getting players in cornucopia
        var playersInCorn = []

        for (district = 1; district <= 12; district++) {

            if (characters["district" + district].male.location == "cornucopia") {
                if (characters["district" + district].male.alive == true) {
                    var list = []
                    list.push(district)
                    list.push("male")
                    playersInCorn.push(list)
                }
            }
            if (characters["district" + district].female.location == "cornucopia") {
                if (characters["district" + district].female.alive == true) {
                    var list = []
                    list.push(district)
                    list.push("female")
                    playersInCorn.push(list)
                }
            }

        }

        // 0: Run Away
        // 1: Kill
        // 2: Get Supplies

        const action = Math.floor(Math.random() * 3)
        const actionvictim = playersInCorn[Math.floor(Math.random() * playersInCorn.length)]
        if (action == 0) {
            var name = characters["district" + actionvictim[0]][actionvictim[1]].name
            var result = `<font color="#FB8200" style="font-weight: bold;">` + name + `</font> runs away from the Cornucopia and goes to the forest.`
            characters["district" + actionvictim[0]][actionvictim[1]].location = "forest"
            return result

        } else if (action == 1) {
            var name = characters["district" + actionvictim[0]][actionvictim[1]].name
            const victim = playersInCorn[Math.floor(Math.random() * playersInCorn.length)]
            var victimname = characters["district" + victim[0]][victim[1]].name

            var types_default = [
                `<font color="#FB8200" style="font-weight: bold;">${name}</font> kills <font color="#FB8200" style="font-weight: bold;">${victimname}</font> while they were grabbing supplies.`,
                `<font color="#FB8200" style="font-weight: bold;">${name}</font> catches <font color="#FB8200" style="font-weight: bold;">${victimname}</font> off-guard, so <font color="#FB8200" style="font-weight: bold;">${name}</font> killed them.`,
                `<font color="#FB8200" style="font-weight: bold;">${name}</font> strangles <font color="#FB8200" style="font-weight: bold;">${victimname}</font> after engaging in a fist fight.`
            ]

            var types_knife = [
                `<font color="#FB8200" style="font-weight: bold;">${name}</font> slits <font color="#FB8200" style="font-weight: bold;">${victimname}</font> throat with a knife.`,
                `<font color="#FB8200" style="font-weight: bold;">${name}</font> repeately stabs <font color="#FB8200" style="font-weight: bold;">${victimname}</font> with a knife, killing them.`,
            ]

            var result = ""

            if (characters["district" + actionvictim[0]][actionvictim[1]].inventory.includes("Knife")) {
                result = types_knife[Math.floor(Math.random() * types_knife.length)]
            } else {
                result = types_default[Math.floor(Math.random() * types_default.length)]
            }

            characters["district" + actionvictim[0]][actionvictim[1]].kills += 1
            characters["district" + actionvictim[0]][actionvictim[1]].victims.push(characters["district" + victim[0]][victim[1]].name)
            characters["district" + victim[0]][victim[1]].alive = false
            return result


        } else if (action == 2) {
            var name = characters["district" + actionvictim[0]][actionvictim[1]].name
            const random = Math.floor(Math.random() * 3)

            // 0: Nothing
            // 1: Knife
            // 2: Bow

            var result = ``

            if (random == 0) {
                result = `<font color="#FB8200" style="font-weight: bold;">` + name + `</font> finds and chest and opens it, only to find nothing.`
            } else if (random == 1) {
                result = `<font color="#FB8200" style="font-weight: bold;">` + name + `</font> finds a knife near a chest and takes it.`
                characters["district" + actionvictim[0]][actionvictim[1]].inventory.push("Knife")
            } else if (random == 2) {
                result = `<font color="#FB8200" style="font-weight: bold;">` + name + `</font> finds a bow sitting near a chest and takes it.`
                characters["district" + actionvictim[0]][actionvictim[1]].inventory.push("Bow")
            }

            return result

        }


    } else if (type == "day") {

        // DONT HAVE ITEM
        // 0: Do something Random (at location)
        // 1: Kill (at same location)
        // 2: Lose Sanity

        // DOES HAVE ITEM
        // 0: Do something Random (at location)
        // 1: Kill (at same location)
        // 2: Use Item (if they have an item)
        // 3: Lose Sanity

        var aliveplayers = []

        for (district = 1; district <= 12; district++) {

            if (characters["district" + district].male.alive == true) {
                var list = []
                list.push(district)
                list.push("male")
                aliveplayers.push(list)
            }
            if (characters["district" + district].female.alive == true) {
                var list = []
                list.push(district)
                list.push("female")
                aliveplayers.push(list)
            }
        }

        var plr = aliveplayers[Math.floor(Math.random() * aliveplayers.length)]
        var person = characters["district" + plr[0]][plr[1]]
        var name = person.name

        var types_random_forest = [
            `<font color="#FB8200" style="font-weight: bold;">${name}</font> travels to higher ground in the forest.`,
            `<font color="#FB8200" style="font-weight: bold;">${name}</font> explores their surroundings.`,
            `<font color="#FB8200" style="font-weight: bold;">${name}</font> explores the arena.`,
            `<font color="#FB8200" style="font-weight: bold;">${name}</font> questions their sanity.`,
            `<font color="#FB8200" style="font-weight: bold;">${name}</font> skinned their knee going down a hill.`,
            `<font color="#FB8200" style="font-weight: bold;">${name}</font> is feeling lonely.`,
            `<font color="#FB8200" style="font-weight: bold;">${name}</font> tries sleeping through the whole day.`,
            `<font color="#FB8200" style="font-weight: bold;">${name}</font> discovers a cave and decides to go in for the night.`,
        ]

        if (person.inventory.length > 0) {
            
            var array = [0,1,2,3]
            const random = array[Math.floor(Math.random() * array.length)];

            if (random == 0) {

                if (person.location == "forest") {
                    var string = types_random_forest[Math.floor(Math.random() * types_random.length)]
                    if (string == `<font color="#FB8200" style="font-weight: bold;">${name}</font> discovers a cave and decides to go in for the night.`) {
                        person.location = "cave"
                    }
                }
                
                return string

            } else {
                return "NOTRH"
            }

        } else {
            
            var array = [0,1,2]
            const random = array[Math.floor(Math.random() * array.length)];

            if (random == 0) {

                if (person.location == "forest") {
                    var string = types_random_forest[Math.floor(Math.random() * types_random.length)]
                    if (string == `<font color="#FB8200" style="font-weight: bold;">${name}</font> discovers a cave and decides to go in for the night.`) {
                        person.location = "cave"
                    }
                }
                
                return string
            } else {
                return "NOTRH"
            }

        }

    }
}

function startBloodbath() {
    document.getElementsByClassName('statusTitle')[0].innerText = "The Bloodbath"
    var array = [13, 14, 15, 16, 17, 18]
    const times = array[Math.floor(Math.random() * array.length)];

    document.getElementById('status').style.display = "none"

    document.getElementById("bloodbath").style.display = "block"

    for (i = 0; i <= times; i++) {
        var text = decide("bloodbath")

        if (text == "") { } else {
            var paragraph = document.createElement('p')
            paragraph.innerHTML = text
            paragraph.style.color = "white"

            document.getElementById('bloodbathContent').append(paragraph)
        }

    }

    document.getElementById('bloodbathStatus').style.display = "block"


}


function showPersonDetail(district, gender) {
    var person = characters["district" + district][gender]

    document.getElementById('personDetailed_Name').innerText = person.name

    var invstring = ""
    var victimsstring = ""

    for (i = 0; i < person.inventory.length; i++) {
        if (i == 0) {
            invstring = invstring + person.inventory[i]
        } else {
            invstring = invstring + ", " + person.inventory[i]
        }
    }

    if (invstring == "") {
        invstring = "Nothing"
    }

    for (i = 0; i < person.victims.length; i++) {
        if (i == 0) {
            victimsstring = victimsstring + person.victims[i]
        } else {
            victimsstring = victimsstring + ", " + person.victims[i]
        }
    }

    if (victimsstring == "") {
        victimsstring = "No one"
    }

    document.getElementById('personDetailed_Inv').innerText = invstring
    document.getElementById('personDetailed_Vict').innerText = victimsstring


    document.getElementById('personDetailed').showModal()
}

function backtoBloodbath() {
    document.getElementById('bloodbath').style.display = "block"
    document.getElementById('status').style.display = "none"
}

function startDay() {

    var array = [16, 17, 18, 19, 20]
    const times = array[Math.floor(Math.random() * array.length)];

    for (i = 0; i <= times; i++) {
        var text = decide("day")

        if (text == "") { } else {
            var paragraph = document.createElement('p')
            paragraph.innerHTML = text
            paragraph.style.color = "white"

            document.getElementById('normalContent').append(paragraph)
        }

    }

    document.getElementById('normalStatus').style.display = "block"

}

function continueGame() {
    if (document.getElementsByClassName('statusTitle')[0].innerText == "The Bloodbath") {
        document.getElementById('bloodbath').style.display = "none"
        document.getElementById('normal').style.display = "block"
        document.getElementsByClassName('statusTitle')[0].innerText = "Day " + time
        startDay()
    }
}