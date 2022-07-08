import { LightningElement, track } from 'lwc';
import translate from '@salesforce/apex/TranslateMyClass.translate';

export default class translatePage extends LightningElement {
    
    sourceText;
    targetText = '';
    sourceValue = 'en';
    targetValue = 'fr';

    get options() {
        return [
            { label: 'English', value: 'en' },
            { label: 'French', value: 'fr' },
            { label: 'Hindi', value: 'hi' },
            { label: 'German', value: 'de' },
        ];
    }

    handleSourceChange(event) {
        this.sourceValue = event.detail.value;
    }

    handleTargetChange(event) {
        this.targetValue = event.detail.value;
    }

    handleSourceTextChange(event) {
        this.sourceText = event.detail.value;
    }

    handleTranslate(event) {
        translate({sourceValue:this.sourceValue, targetValue:this.targetValue, sourceText: this.sourceText}).then(result => {
            this.targetText = result;
        });
    }
}