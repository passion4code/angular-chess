import { ChessPiece, ChessRow, ChessColumn, ChessPieceType, ChessPieceColor, ChessSquare } from '../types';

export class BoardMaster {

    constructor() { }

    // Who's in play?
    private activePieces: ChessPiece[];

    // Who has died?
    private graveyardPieces: ChessPiece[];

    private activePlayer: ChessPieceColor;

    public startNewGame() {
        // reset pieces
        this.resetPieces();
        this.activePlayer = 'white';
    }

    public getActivePlayer(): ChessPieceColor {
        return this.activePlayer;
    }

    // Given a row and column, find the piece. If not found, will return undefined
    public getPieceBySquare(row: ChessRow, column: ChessColumn): ChessPiece | undefined {
        return this.activePieces.find(piece => {
            return piece.square.row === row && piece.square.column === column;
        });
    }

    // Move a piece from Point A to Point B, if no item exists in Point A, or if it cannot move to Point B, it will throw an exception
    // Make sure to use the canMove() method
    public movePiece(originPiece: ChessPiece, destinationSquare: ChessSquare) {
        // it seems that this is all we need to do for angular bindings to be updated on the reference to the object
        originPiece.square = destinationSquare;
    }

    // Resets the game pieces back to the starting points
    private resetPieces() {
        this.activePieces = [];
        const availableColors: ChessPieceColor[] = ['black', 'white'];
        // For both colors
        availableColors.forEach(color => {
            // Determine rows by color
            const backRow = color === 'white' ? 1 : 8;
            const pawnRow = color === 'white' ? 2 : 7;

            // Push in the backline
            this.activePieces.push(
                // Rooks
                this.generatePiece(color, 'rook', backRow, 'A'),
                this.generatePiece(color, 'rook', backRow, 'H'),
                // Knights
                this.generatePiece(color, 'knight', backRow, 'B'),
                this.generatePiece(color, 'knight', backRow, 'G'),
                // Bishops
                this.generatePiece(color, 'bishop', backRow, 'C'),
                this.generatePiece(color, 'bishop', backRow, 'F'),
                // King & Queen
                this.generatePiece(color, 'queen', backRow, 'D'),
                this.generatePiece(color, 'king', backRow, 'E'),
            );
            // And the pawns
            const pawnColumns: ChessColumn[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            pawnColumns.forEach(pawnColumn => {
                this.activePieces.push(this.generatePiece(color, 'pawn', pawnRow, pawnColumn));
            });
        });
    }

    private generatePiece(color: 'black' | 'white', type: ChessPieceType, row: ChessRow, column: ChessColumn): ChessPiece {
        return {
            square: {
                row,
                column,
            },
            color,
            type,
        };
    }
}
