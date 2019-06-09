import { ChessPiece, ChessRow, ChessColumn, ChessPieceType, ChessPieceColor } from '../types';

// responsible for awareness of pieces on the board and such
export class BoardMaster {
    activePieces: ChessPiece[];

    graveyardPieces: ChessPiece[];

    public startNewGame() {
        // reset pieces
        this.resetPieces();
    }

    // Given a row and column, find the piece. If not found, will return undefined
    public getPieceBySquare(row: ChessRow, column: ChessColumn): ChessPiece|undefined {
        return this.activePieces.find(piece => {
            return piece.row === row && piece.column === column;
        });
    }

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
            color,
            type,
            row,
            column
        };
    }

}
