// Type declarations for objects used

// Rows and columns, very explicit
export type ChessColumn = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type ChessRow = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface ChessSquare {
    row: ChessRow;
    column: ChessColumn;
}

export type ChessPieceType = 'knight' | 'rook' | 'bishop' | 'pawn' | 'queen' | 'king';

export type ChessPieceColor = 'black' | 'white';

// Chess Piece
export interface ChessPiece {
    square: ChessSquare;
    color: ChessPieceColor;
    type: ChessPieceType;
}
