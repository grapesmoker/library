import os
import pysolr
import PyPDF2

from collections import namedtuple


def find_pdfs(root):

    LibRecord = namedtuple('LibRecord', ['title', 'authors', 'path'])
    records = []

    for dirpath, dirnames, filenames in os.walk(root):
        for filename in filenames:
            if filename.endswith('.pdf'):
                full_path = os.path.join(dirpath, filename)
                reader = PyPDF2.PdfFileReader(open(full_path, 'r'))
                info = reader.getDocumentInfo()
                authors = info.author or ''
                if authors != '':
                    authors = authors.split(',')
                record = LibRecord(info.title or '', authors, full_path)
                records.append(record)

    return records


