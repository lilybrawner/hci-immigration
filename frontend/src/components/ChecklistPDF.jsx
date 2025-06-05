import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

// Helper to parse text and detect URLs, render links
const renderTextWithLinks = (text) => {
  if (typeof text !== 'string') return renderFormattedText(text);

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, idx) =>
  urlRegex.test(part) ? (
    <Link key={idx} src={part} style={styles.underline}>
      {part}
    </Link>
  ) : (
    <Text key={idx}>{part}</Text>
  )
);
};




const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  itemContainer: {
    marginBottom: 6,
  },
  itemText: {
    fontSize: 12,
  },
  nested: {
    marginLeft: 12,
  },
  checked: {
    textDecoration: 'line-through',
    color: 'gray',
  },
  underline: {
    textDecoration: 'underline',
  },
  lineBreak: {
    marginBottom: 6,
  },
  faqTitle: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },
  faqQuestion: {
    fontWeight: 'bold',
  },
  faqAnswer: {
    marginBottom: 10,
  },
});

function extractTextFromJSX(node) {
  if (typeof node === 'string') {
    return node;
  }
  if (Array.isArray(node)) {
    return node.map(extractTextFromJSX).join('');
  }
  if (React.isValidElement(node)) {
    const { children, type } = node.props;

    if (typeof type === 'string' && (type === 'a' || type === 'Link' || type.displayName === 'Link')) {
      return <Text style={styles.underline}>{extractTextFromJSX(children)}</Text>;
    }

    return extractTextFromJSX(children);
  }
  return String(node);
}

const renderFormattedText = (label) => {
  if (React.isValidElement(label) || Array.isArray(label)) {
    const content = extractTextFromJSX(label);
    if (typeof content === 'string') {
      const lines = content.split('\n');
      return lines.map((line, idx) => (
        <Text key={idx} style={styles.lineBreak}>
          {line}
        </Text>
      ));
    }
    return content;
  }
  if (typeof label === 'string') {
    const lines = label.split('\n');
    return lines.map((line, idx) => (
      <Text key={idx} style={styles.lineBreak}>
        {line}
      </Text>
    ));
  }
  return <Text>{String(label)}</Text>;
};

const ChecklistPDF = ({ step, checklist, faq }) => {
  // Normalize FAQ input to always be an array (or empty array)
  console.log('step', step);
console.log('checklist', checklist);
console.log('faq', faq);
const normalizedFaq = Array.isArray(faq) ? faq : [];



  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Checklist for Step: {step.title || step.id}</Text>

        {checklist.map((item, idx) => {
          if (item.section) {
            return (
              <View key={idx} style={{ marginTop: idx === 0 ? 0 : 20, marginBottom: 6 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{renderFormattedText(item.section)}</Text>
              </View>
            );
          }

          if (item.textOnly) {
            return (
              <View key={idx} style={[styles.itemContainer, item.nested && styles.nested]}>
                {renderFormattedText(item.label || item.translation)}
              </View>
            );
          }

          if (item.type === 'dropdown') {
            return (
              <View key={idx} style={[styles.itemContainer, item.nested && styles.nested]}>
                <Text>{extractTextFromJSX(item.label)}</Text>
                <View style={styles.nested}>
                  {item.options.map((option, i) => {
                    if (typeof option === 'string') {
                      return (
                        <Text key={i} style={styles.lineBreak}>
                          {option}
                        </Text>
                      );
                    }
                    return (
                      <View key={i} style={{ marginBottom: 3 }}>
                        <Text>{extractTextFromJSX(option.label)}</Text>
                        {Array.isArray(option.children) &&
                          option.children.map((child, ci) => (
                            <View
                              key={ci}
                              style={[styles.nested, child.checked && styles.checked]}
                            >
                              {renderFormattedText(child.label)}
                            </View>
                          ))}
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          }

          return (
            <View
              key={idx}
              style={[styles.itemContainer, item.nested && styles.nested, item.checked && styles.checked]}
            >
              {renderFormattedText(item.translation || item.label)}
            </View>
          );
        })}

        {/* FAQ Section */}
        {normalizedFaq.length > 0 ? (
  <View>
    <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
    {normalizedFaq.map((item, i) => (
      <View key={i} style={{ marginTop: 10 }}>
        <View style={styles.faqQuestion}>
          {renderFormattedText(item.question)}
        </View>
        <View style={styles.faqAnswer}>
          {typeof item.answer === 'string'
            ? renderTextWithLinks(item.answer)
            : renderFormattedText(item.answer)}
        </View>
      </View>
    ))}
  </View>
) : (
  <Text style={{ marginTop: 10, fontStyle: 'italic' }}>No FAQs available for this step.</Text>
)}


      </Page>
    </Document>
  );
};

export default ChecklistPDF;


