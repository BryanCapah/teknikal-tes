const array = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
const total = getAnagram(array)
console.log(removeDuplicateArray(total));


function removeDuplicateArray(total) {
    const newTotal = []
    const filteredTotal = total.sort((a, b) => b.length - a.length)

    filteredTotal.forEach((fTotal, idx) => {
        const nextTotal = filteredTotal[idx + 1]

        let allSame = 0
        fTotal.forEach(fTotalItem => {
            if (nextTotal?.includes(fTotalItem)) allSame += 1
        })
        if (allSame !== nextTotal?.length) newTotal.push(fTotal)
    })

    return newTotal.sort((a, b) => b[0].length - a[0].length).sort((a, b) => b.length - a.length)

}

function getAnagram(array) {
    const total = []

    array.forEach((name, idx) => {
        const matchedName = []
        const splittedName = name.split('')
        const splittedNameLength = splittedName.length

        array.forEach((name2, idx2) => {
            const splittedName2 = name2.split('')
            const splittedName2Length = splittedName2.length
            let isMatched = 0

            for (let i = 0; i < splittedName.length; i++) {
                const isSameLength = splittedNameLength === splittedName2Length
                const nameAlphabet = splittedName[i]
                if (isSameLength && name2.includes(nameAlphabet)) isMatched += 1
            }
            if (isMatched === splittedName2Length) matchedName.push(name2)
        })

        if (total.length > 0) {
            const isExist = checkArrayIsSame(total[total.length - 1], matchedName)
            if (!isExist) total.push(matchedName)
        }
        else total.push(matchedName)
    });

    return total

}

function checkArrayIsSame(array, array2) {
    if (!Array.isArray(array) || !Array.isArray(array2) || array.length !== array2.length) return false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array2[i]) return false
    }

    return true;
}