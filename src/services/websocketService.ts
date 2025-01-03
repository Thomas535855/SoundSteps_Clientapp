import { useToast } from "vue-toastification";

class WebSocketService {
    private socket: WebSocket | null = null;
    private toast = useToast(); // Toast instance for notifications

    // Automatically connect WebSocket
    connect(url: string): void {
        if (this.socket) {
            console.warn("WebSocket is already connected.");
            return;
        }

        this.socket = new WebSocket(url);

        this.socket.onopen = () => {
            console.log("WebSocket connection established.");
        };

        this.socket.onmessage = (event: MessageEvent) => {
            const message = event.data;
            console.log("Message received:", message);
            this.showToast(message); // Show toast notification
        };

        this.socket.onclose = () => {
            console.log("WebSocket connection closed. Reconnecting...");
            this.reconnect(url); // Attempt to reconnect
        };

        this.socket.onerror = (error) => {
            console.error("WebSocket error:", error);
        };
    }

    private reconnect(url: string): void {
        setTimeout(() => {
            console.log("Reconnecting to WebSocket...");
            this.connect(url);
        }, 5000); // Retry connection after 5 seconds
    }

    private showToast(message: string): void {
        this.toast.success(message); // Use success toast for messages
    }

    disconnect(): void {
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
    }
}

export default new WebSocketService();
