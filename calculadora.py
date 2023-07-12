major = [2, 2, 1, 2, 2, 2, 1]
natural = [2, 1, 2, 2, 1, 2, 2]
harmonic = [2, 1, 2, 2, 1, 3, 1]
melodic = [2, 1, 2, 2, 2, 2, 1]
melodicDescending = [2, 1, 2, 2, 2, 3, 2]
melodicAscending = [2, 1, 2, 2, 2, 2, 1]
pentatonicMajor = [2, 2, 3, 2, 3]
pentatonicMinor = [3, 2, 2, 3, 2]
blues = [3, 2, 1, 1, 3, 2]
dorianMode = [2, 1, 2, 2, 2, 1, 2]
mixolydianMode = [2, 2, 1, 2, 2, 1, 2]
lydianMode = [2, 2, 2, 1, 2, 2, 1]
phrygianMode = [1, 2, 2, 2, 1, 2, 2]
locrianMode = [1, 2, 2, 1, 2, 2, 2]

dictScales = {
    'major': [2, 2, 1, 2, 2, 2, 1],
    'natural': [2, 1, 2, 2, 1, 2, 2],
    'harmonic': [2, 1, 2, 2, 1, 3, 1],
    'melodic': [2, 1, 2, 2, 2, 2, 1],
    'melodicDescending': [2, 1, 2, 2, 2, 3, 2],
    'melodicAscending': [2, 1, 2, 2, 2, 2, 1],
    'pentatonicMajor': [2, 2, 3, 2, 3],
    'pentatonicMinor': [3, 2, 2, 3, 2],
    'blues': [3, 2, 1, 1, 3, 2],
    'dorianMode': [2, 1, 2, 2, 2, 1, 2],
    'mixolydianMode': [2, 2, 1, 2, 2, 1, 2],
    'lydianMode': [2, 2, 2, 1, 2, 2, 1],
    'phrygianMode': [1, 2, 2, 2, 1, 2, 2],
    'locrianMode': [1, 2, 2, 1, 2, 2, 2]
}



names = ['Dó', 'Dó#', 'Ré', 'Ré#', 'Mi', 'Fá', 'Fá#', 'Sol', 'Sol#', 'Lá', 'Lá#', 'Si', 'Dó', 'Dó#', 'Ré', 'Ré#', 'Mi', 'Fá', 'Fá#', 'Sol', 'Sol#', 'Lá', 'Lá#', 'Si']

simbols = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

#simbol = 'A'
#note = names[simbols.index(simbol)]
choice = 'scales'
if(choice == 'notes'):
    for simbol in simbols:
        note = names[simbols.index(simbol)]

        majorScale = []
        naturalScale = []
        harmonicScale = []
        melodicScale = []

        startMaj = names.index(note)
        startNat = names.index(note)
        startHar = names.index(note)
        startMel = names.index(note)
        for i in range(0, 7):
            #Major
            majorScale.append(names[startMaj])
            startMaj += major[i]
            
            #Natural
            naturalScale.append(names[startNat])
            startNat += natural[i]

            #Harmonic
            harmonicScale.append(names[startHar])
            startHar += harmonic[i]

            #Melodic
            melodicScale.append(names[startMel])
            startMel += melodic[i]
            

        startMaj = names.index(note)
        startNat = names.index(note)
        startHar = names.index(note)
        startMel = names.index(note)
        for i in range(0, 7):
            #Major
            majorScale.append(simbols[startMaj])
            startMaj += major[i]

            #Natural
            naturalScale.append(simbols[startNat])
            startNat += natural[i]

            #Harmonic
            harmonicScale.append(simbols[startHar])
            startHar += harmonic[i]

            #Melodic
            melodicScale.append(simbols[startMel])
            startMel += melodic[i]

        print(f'{simbol}maj : {majorScale}, \n{simbol}nat : {naturalScale},\n{simbol}har : {harmonicScale}, \n{simbol}mel : {melodicScale}\n')
elif(choice == 'scales'):
    print(f'Trabalho para um outro dia :)')