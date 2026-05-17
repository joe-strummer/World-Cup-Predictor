export type Fixture = {
  id: string
  teamA: string
  teamB: string
}

export const FIXTURES_BY_GROUP: Record<string, Fixture[]> = {
  A: [
    { id: 'match1', teamA: 'MEX', teamB: 'RSA' },
    { id: 'match2', teamA: 'KOR', teamB: 'CZE' },
    { id: 'match3', teamA: 'CZE', teamB: 'RSA' },
    { id: 'match4', teamA: 'MEX', teamB: 'KOR' },
    { id: 'match5', teamA: 'CZE', teamB: 'MEX' },
    { id: 'match6', teamA: 'RSA', teamB: 'KOR' },
  ],
  B: [
    { id: 'match7', teamA: 'CAN', teamB: 'BIH' },
    { id: 'match8', teamA: 'QAT', teamB: 'SUI' },
    { id: 'match9', teamA: 'SUI', teamB: 'BIH' },
    { id: 'match10', teamA: 'CAN', teamB: 'QAT' },
    { id: 'match11', teamA: 'SUI', teamB: 'CAN' },
    { id: 'match12', teamA: 'BIH', teamB: 'QAT' },
  ],
  C: [
    { id: 'match13', teamA: 'BRA', teamB: 'MAR' },
    { id: 'match14', teamA: 'HAI', teamB: 'SCO' },
    { id: 'match15', teamA: 'SCO', teamB: 'MAR' },
    { id: 'match16', teamA: 'BRA', teamB: 'HAI' },
    { id: 'match17', teamA: 'SCO', teamB: 'BRA' },
    { id: 'match18', teamA: 'MAR', teamB: 'HAI' },
  ],
  D: [
    { id: 'match19', teamA: 'USA', teamB: 'PAR' },
    { id: 'match20', teamA: 'AUS', teamB: 'TUR' },
    { id: 'match21', teamA: 'USA', teamB: 'AUS' },
    { id: 'match22', teamA: 'TUR', teamB: 'PAR' },
    { id: 'match23', teamA: 'TUR', teamB: 'USA' },
    { id: 'match24', teamA: 'PAR', teamB: 'AUS' },
  ],
  E: [
    { id: 'match25', teamA: 'GER', teamB: 'CUW' },
    { id: 'match26', teamA: 'CIV', teamB: 'ECU' },
    { id: 'match27', teamA: 'GER', teamB: 'CIV' },
    { id: 'match28', teamA: 'ECU', teamB: 'CUW' },
    { id: 'match29', teamA: 'CUW', teamB: 'CIV' },
    { id: 'match30', teamA: 'ECU', teamB: 'GER' },
  ],
  F: [
    { id: 'match31', teamA: 'NED', teamB: 'JPN' },
    { id: 'match32', teamA: 'SWE', teamB: 'TUN' },
    { id: 'match33', teamA: 'NED', teamB: 'SWE' },
    { id: 'match34', teamA: 'TUN', teamB: 'JPN' },
    { id: 'match35', teamA: 'JPN', teamB: 'SWE' },
    { id: 'match36', teamA: 'TUN', teamB: 'NED' },
  ],
  G: [
    { id: 'match37', teamA: 'BEL', teamB: 'EGY' },
    { id: 'match38', teamA: 'IRN', teamB: 'NZL' },
    { id: 'match39', teamA: 'BEL', teamB: 'IRN' },
    { id: 'match40', teamA: 'NZL', teamB: 'EGY' },
    { id: 'match41', teamA: 'EGY', teamB: 'IRN' },
    { id: 'match42', teamA: 'NZL', teamB: 'BEL' },
  ],
  H: [
    { id: 'match43', teamA: 'ESP', teamB: 'CPV' },
    { id: 'match44', teamA: 'KSA', teamB: 'URU' },
    { id: 'match45', teamA: 'ESP', teamB: 'KSA' },
    { id: 'match46', teamA: 'URU', teamB: 'CPV' },
    { id: 'match47', teamA: 'CPV', teamB: 'KSA' },
    { id: 'match48', teamA: 'URU', teamB: 'ESP' },
  ],
  I: [
    { id: 'match49', teamA: 'FRA', teamB: 'SEN' },
    { id: 'match50', teamA: 'IRQ', teamB: 'NOR' },
    { id: 'match51', teamA: 'FRA', teamB: 'IRQ' },
    { id: 'match52', teamA: 'NOR', teamB: 'SEN' },
    { id: 'match53', teamA: 'NOR', teamB: 'FRA' },
    { id: 'match54', teamA: 'SEN', teamB: 'IRQ' },
  ],
  J: [
    { id: 'match55', teamA: 'ARG', teamB: 'ALG' },
    { id: 'match56', teamA: 'AUT', teamB: 'JOR' },
    { id: 'match57', teamA: 'ARG', teamB: 'AUT' },
    { id: 'match58', teamA: 'JOR', teamB: 'ALG' },
    { id: 'match59', teamA: 'ALG', teamB: 'AUT' },
    { id: 'match60', teamA: 'JOR', teamB: 'ARG' },
  ],
  K: [
    { id: 'match61', teamA: 'POR', teamB: 'COD' },
    { id: 'match62', teamA: 'UZB', teamB: 'COL' },
    { id: 'match63', teamA: 'POR', teamB: 'UZB' },
    { id: 'match64', teamA: 'COL', teamB: 'COD' },
    { id: 'match65', teamA: 'COL', teamB: 'POR' },
    { id: 'match66', teamA: 'COD', teamB: 'UZB' },
  ],
  L: [
    { id: 'match67', teamA: 'ENG', teamB: 'CRO' },
    { id: 'match68', teamA: 'GHA', teamB: 'PAN' },
    { id: 'match69', teamA: 'ENG', teamB: 'GHA' },
    { id: 'match70', teamA: 'PAN', teamB: 'CRO' },
    { id: 'match71', teamA: 'PAN', teamB: 'ENG' },
    { id: 'match72', teamA: 'CRO', teamB: 'GHA' },
  ],
}
