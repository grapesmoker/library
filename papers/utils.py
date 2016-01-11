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
                reader = PyPDF2.PdfFileReader(open(filename, 'r'))
                info = reader.getDocumentInfo()
                record = LibRecord()
                record.title = info.title or ''
                record.authors = info.author or ''
                record.path = filename
                records.append(record)

    return records


