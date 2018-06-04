// LICENSE : MIT
"use strict";
import {RuleHelper} from "textlint-rule-helper";
/**
 * @param {RuleContext} context
 */
export default function (context) {
    const helper = new RuleHelper(context);
    const {Syntax, getSource, RuleError, report} = context;
    return {
        /*
        Match pattern

            # Header
            TODO: quick fix this.
            ^^^^^
            Hit!
        */
		[Syntax.Document](node){
			//recherche du sous titre 1.But du projet dans le document
			const text = getSource(node);
			const match = text.match(/## 1. But du projet/i);
			if(!match){
				report(node, new RuleError(`Sous-titre "1.But du projet" absent`));
			}
		},
			
		[Syntax.Header](node){
			//si un sous titre 1.But du projet est trouvé,  
			//on vérifie si le parent est bon
			if (helper.isChildNode(node, [Syntax.Link, Syntax.Image, Syntax.BlockQuote])) {
                return;
            }
			const text = getSource(node);
			if(text== "## 1. But du projet"){
				const parents = helper.getParents(node);
				if(parents[1]!=null){
					const text2 = parents[1];
					if(text2=="# I	Fondements du projet"){
						return;
					}
					const tt = text2;
					report(node, new RuleError(`Pas le bon '${tt}'`));
				}
				const depth1 = node.depth;
				report(node, new RuleError(`LA PROFONDEUR DU HEADER ${depth1}`));
			}
		},
        [Syntax.Str](node) {
            if (helper.isChildNode(node, [Syntax.Link, Syntax.Image, Syntax.BlockQuote])) {
                return;
            }
            // get text from node
            const text = getSource(node);
            // does text contain "todo:"?
            const match = text.match(/azezertyu/i);
            if (match) {
                const todoText = text.substring(match.index);
                report(node, new RuleError(`zefgh: '${todoText}'`, {
                    index: match.index
                }));
            }
        },
        /*
        Match Pattern

            # Header
            - [ ] Todo
              ^^^
              Hit!
        */
    };
}
