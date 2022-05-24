export interface Team {
    position: number;
    points: number;
    team: {
        team_id: number,
        team_name: string,
        initials: string,
        shield: string
    },
    games: number;
    wins: number;
    ties: number;
    losses: number;
    goals_pro: number;
    goals_against: number;
    goals_difference: number;
    profit: number;
    position_variation: number;
    last_games: string[];
}
