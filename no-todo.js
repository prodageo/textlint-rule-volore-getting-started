/**
 * @param {RuleContext} context
 */
export default function(context) {
    const helper = new RuleHelper(context);
    const { Syntax, getSource, RuleError, report } = context;
    return {
        /*
            # Header
            Todo: quick fix this.
            ^^^^^
            Hit!
        */
        [Syntax.Str](node) {
            // get text from node
            const text = getSource(node);
            // does text contain "todo:"?
            const match = text.match(/todo:/i);
            if (match) {
                report(
                    node,
                    new RuleError(`Found TODO: '${text}'`, {
                        index: match.index
                    })
                );
            }
        },
        /*
            # Header
            - [ ] Todo
              ^^^
              Hit!
        */
        [Syntax.ListItem](node) {
            const text = context.getSource(node);
            const match = text.match(/\[\s+\]\s/i);
            if (match) {
                report(
                    node,
                    new context.RuleError(`Found TODO: '${text}'`, {
                        index: match.index
                    })
                );
            }
        }
    };
}
