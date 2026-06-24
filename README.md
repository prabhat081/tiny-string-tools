# 🛠️ tiny-string-tools

A lightweight, zero-dependency, highly optimized utility library for common string manipulations. 

Built with TypeScript. Supports both CommonJS and ES Modules out of the box. Perfect for everyday React, Node.js, and Vanilla JS projects.

## Installation

```bash
npm install tiny-string-tools
```

## Quick Start Usage

### **ES Modules (React, Vite, Next.js)**
```typescript
import { capitalize, slugify, getInitials } from 'tiny-string-tools';

console.log(capitalize('hello world')); // "Hello world"
console.log(slugify('Learn Node JS!')); // "learn-node-js"
console.log(getInitials('Prabhat Kumar')); // "PK"
```

### **CommonJS (Node.js)**
```javascript
const { maskText, cleanSpaces } = require('tiny-string-tools');

console.log(maskText('9876543210')); // "******3210"
console.log(cleanSpaces('  Hello    World  ')); // "Hello World"
```

## 📚 API Reference

### Basic Utilities
* **`capitalize(str)`**: `capitalize('hello')` ➡️ `"Hello"`
* **`reverseString(str)`**: `reverseString('hello')` ➡️ `"olleh"`

### Text Transformations
* **`slugify(str)`**: `slugify('My Blog Post!')` ➡️ `"my-blog-post"`
* **`truncate(str, maxLen)`**: `truncate('Very long string', 10)` ➡️ `"Very long..."`
* **`titleCase(str)`**: `titleCase('prabhat KUMAR')` ➡️ `"Prabhat Kumar"`

### Data Formatting & UI Helpers
* **`getInitials(name)`**: `getInitials('Prabhat Kumar')` ➡️ `"PK"`
* **`maskText(str, visibleCount?, maskChar?)`**: `maskText('9876543210')` ➡️ `"******3210"`
* **`cleanSpaces(str)`**: `cleanSpaces('  Prabhat    Kumar  ')` ➡️ `"Prabhat Kumar"`

### Validation
* **`isValidEmail(str)`**: `isValidEmail('test@example.com')` ➡️ `true`

## License
MIT
