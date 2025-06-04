import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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
      return (
        <Text style={styles.underline}>
          {extractTextFromJSX(children)}
        </Text>
      );
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
        <Text key={idx} style={styles.lineBreak}>{line}</Text>
      ));
    }
    return content;
  }
  if (typeof label === 'string') {
    const lines = label.split('\n');
    return lines.map((line, idx) => (
      <Text key={idx} style={styles.lineBreak}>{line}</Text>
    ));
  }
  return <Text>{String(label)}</Text>;
};

const ChecklistPDF = ({ step, checklist }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>
        Checklist for Step: {step.title || step.id}
      </Text>

      {checklist.map((item, idx) => {
        if (item.section) {
          return (
            <View key={idx} style={{ marginTop: idx === 0 ? 0 : 20, marginBottom: 6 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                {renderFormattedText(item.section)}
              </Text>
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
                  // option is an object with label and possibly children
                  return (
                    <View key={i} style={{ marginBottom: 3 }}>
                      <Text>{extractTextFromJSX(option.label)}</Text>
                      {Array.isArray(option.children) &&
                        option.children.map((child, ci) => (
                          <View
                            key={ci}
                            style={[
                              styles.nested,
                              child.checked && styles.checked,
                            ]}
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

        // Default checkbox or normal item rendering
        return (
          <View
            key={idx}
            style={[
              styles.itemContainer,
              item.nested && styles.nested,
              item.checked && styles.checked,
            ]}
          >
            {renderFormattedText(item.translation || item.label)}
          </View>
        );
      })}
    </Page>
  </Document>
);

export default ChecklistPDF;
