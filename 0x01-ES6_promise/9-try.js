export default function guardrail(mathFunction) {
    let queue = [];
    try {
        queue.push(mathFunction());
        // queue = queue.push('Guardrail was processed');
    } catch (err) {
        queue.push(`Error: ${err.message}`);
    } finally {
        queue.push('Guardrail was processed');
    }
    return queue;
}