// types/speech-recognition.ts or app/types.ts

// Define the SpeechRecognition types for TypeScript
export interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
    resultIndex: number;
    interpretation: any;
    emma: Document | null;
  }
  
  export interface SpeechRecognitionResultList {
    [index: number]: SpeechRecognitionResult;
    length: number;
    item(index: number): SpeechRecognitionResult;
  }
  
  export interface SpeechRecognitionResult {
    [index: number]: SpeechRecognitionAlternative;
    length: number;
    item(index: number): SpeechRecognitionAlternative;
    isFinal: boolean;
  }
  
  export interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
  }
  
  export interface SpeechRecognitionError extends Event {
    error: string;
    message: string;
  }
  
  export interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    grammars: any;
    interimResults: boolean;
    lang: string;
    maxAlternatives: number;
    onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onerror: ((this: SpeechRecognition, ev: SpeechRecognitionError) => any) | null;
    onnomatch: ((this: SpeechRecognition, ev: Event) => any) | null;
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    abort(): void;
    start(): void;
    stop(): void;
  }
  
  export interface SpeechRecognitionConstructor {
    new (): SpeechRecognition;
    prototype: SpeechRecognition;
  }
  
  // Extend Window interface to include both SpeechRecognition and webkitSpeechRecognition
  declare global {
    interface Window {
      SpeechRecognition?: SpeechRecognitionConstructor;
      webkitSpeechRecognition?: SpeechRecognitionConstructor;
    }
  }