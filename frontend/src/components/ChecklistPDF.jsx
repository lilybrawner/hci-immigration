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
    marginLeft: 12, // Indent nested items
  },
  checked: {
    textDecoration: 'line-through', 
    color: 'gray',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  lineBreak: {
    marginBottom: 6,
  },
});

const renderFormattedText = (text) => {
  const lines = text.split('\n');
  return lines.map((line, idx) => (
    <Text key={idx} style={styles.lineBreak}>
      {line}
    </Text>
  ));
};

const ChecklistPDF = ({ step, checklist }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>
        Checklist for Step: {step.title || step.id}
      </Text>

      {checklist.map((item, idx) => (
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
      ))}
    </Page>
  </Document>
);

export default ChecklistPDF;