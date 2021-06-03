import Randomizer from 'seeded-rand';

export default {
    cardData (identifier) {
        if(!Number.isInteger(identifier)) return null;
    
        const chars = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789','@$%*&^-+!#=']

        const m8 = new Randomizer(identifier)

        function halfLine(big) {
            const groups = [1,2,3,0,0,0,0,0]
            if(big) groups[3] = 4
            return m8.shuffle(groups)
        }

        function smallLines(left, big) {
            const calc = []
            const addition = []
            let delimiter = 3
            if(big) delimiter = 4
            for (let col = 0; col < 4; col++) {
                const column = []
                for (let group = 1; group <= delimiter; group++) {if(left.some(row => row[col] === group)) { column.push(0) } else {column.push(group)}}
                if(!big) {column.push(0)}
                calc.push( m8.shuffle(column) )
                addition.push([3,3,3,3])
            }

            const result = []
            for (let v = 0; v < calc.length; v++) {
                const line = []
                for (let h = 0; h < calc.length; h++) { line.push(calc[h][v]) }
                result.push(line)
            }
    
            return result.concat(addition)
        }

        function charByGroup(big) {
            return function mapper(group) {
                let delimiter = 2
                if(big) delimiter = 3
                    let workingGroup = group - 1
                if(group === 0) workingGroup = m8.intInRange(0, delimiter)
                return chars[workingGroup].charAt(m8.intInRange(0, chars[workingGroup].length-1))    
            }
        }

        function lines() {
            const result = []
            const colors = m8.shuffle([0,1,2,3])
            for (let i = 0; i < 4; i++) {
                const direction = m8.choice(['vertical', 'horizontal'])
                let shift = -1
                let length = -1
                if(direction === 'vertical') {
                    shift = m8.intInRange(1,7)
                    length = m8.intInRange(2,5)
                } else {
                    shift = m8.intInRange(1,4)
                    length = m8.intInRange(2,8)
                }
                result.push({color: colors[i], direction, shift, length})
            }
            return result
        }

        const leftRowGroupsA = []
        const leftRowGroupsB = []
        for (let i = 0; i < 6; i++) {
            leftRowGroupsA.push(halfLine(true)) 
            leftRowGroupsB.push(halfLine(false))
        }

        return [{
            small: smallLines(leftRowGroupsA, true).map( line => line.map(charByGroup(true)) ),
            big: leftRowGroupsA.map(line => line.concat(halfLine(true)).map(charByGroup(true)) ),
            identifier,
            lines: lines()
        }, {
            small: smallLines(leftRowGroupsB, false).map( line => line.map(charByGroup(false)) ),
            big: leftRowGroupsB.map(line => line.concat(halfLine(false)).map(charByGroup(false)) ),
            identifier,
            lines: lines()
        }]
    },

    identifier(identifier) {
        if(identifier) {
            if(String(identifier).length > 10) return null;
            const idx = Number(identifier)
            if(!Number.isInteger(idx)) return null;
            return idx
        } else {
            return Number(String(new Date().valueOf() * new Date().getMilliseconds()).substr(-6,6))
        }
    }
}