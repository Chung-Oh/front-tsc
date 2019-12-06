interface ListernerInterface {
	(): void
}

// Orientação a Evento
export class EventManager {

	private listerners: { [eventName: string]: Array<ListernerInterface> } = {}; // ouvintes

	// No param callable pode-se usar '{(): void}', tem mesmo efeito de ListernerInterface
	addListerner(eventName: string, callable: /*{(): void}*/ ListernerInterface) { // callable = função
		if (!(this.listerners[eventName] instanceof Array)) {
			this.listerners[eventName] = [];
		}
		this.listerners[eventName].push(callable);
	}

	runEvent(eventName: string) {
		for (let callable of this.listerners[eventName]) {
			callable();
		}
	}
}