// Drawing state management

class DrawingState {
    constructor() {
        this.operations = [];
        this.maxOperations = 1000;
    }

    addOperation(operation) {
        this.operations.push(operation);
        
        // Prevent memory leak
        if (this.operations.length > this.maxOperations) {
            this.operations.shift();
        }
        
        return operation;
    }

    removeLastOperation() {
        return this.operations.pop();
    }

    getOperations() {
        return [...this.operations];
    }

    getOperationCount() {
        return this.operations.length;
    }

    clear() {
        this.operations = [];
    }

    // Get operations by user
    getOperationsByUser(userId) {
        return this.operations.filter(op => op.userId === userId);
    }

    // Get operations after a specific timestamp
    getOperationsAfter(timestamp) {
        return this.operations.filter(op => op.timestamp > timestamp);
    }

    // Get state snapshot (for new users joining)
    getSnapshot() {
        return {
            operations: this.operations,
            count: this.operations.length,
            timestamp: Date.now()
        };
    }

    // Restore from snapshot
    restoreFromSnapshot(snapshot) {
        if (snapshot && snapshot.operations) {
            this.operations = snapshot.operations;
        }
    }
}

module.exports = DrawingState;