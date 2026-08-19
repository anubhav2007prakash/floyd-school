import React, { useState } from 'react';
import { getCertificates, getProfile } from '../shared/mockData';
import { Badge, Btn, Modal, EmptyState, showToast } from '../shared/components';

export default function Certificates() {
  const [certificates] = useState(getCertificates());
  const profile = getProfile();
  const [viewingCert, setViewingCert] = useState(null);

  const handleDownload = (cert) => {
    showToast(`Downloading Certificate for ${cert.hackathon}...`, 'success');
  };

  return (
    <div className="space-y-6 hp-fade-up">
      {/* ─── HEADER ─────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Verified Certificates
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Official verifiable credentials issued by Floyd School and partner institutions.
          </p>
        </div>
      </div>

      {/* ─── CERTIFICATES GRID ───────────────────────────────────────── */}
      {certificates.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-slate-100 text-center shadow-sm">
          <EmptyState
            icon={
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            }
            title="No certificates issued yet"
            description="Participate in hackathons and complete submissions to earn verifiable certificates."
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="green">{cert.status}</Badge>
                  <span className="text-xs font-mono text-slate-400">ID: {cert.id}</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xl shrink-0">
                    📜
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{cert.certificateType}</h3>
                    <p className="text-xs text-slate-500">{cert.hackathon}</p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-1.5 text-xs text-slate-600 mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Awarded To:</span>
                    <span className="font-semibold text-slate-800">{profile?.name || cert.participantName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Issue Date:</span>
                    <span className="font-semibold text-slate-800">{cert.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Verification:</span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Verified Credential
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <Btn
                  variant="secondary"
                  size="sm"
                  onClick={() => setViewingCert(cert)}
                  className="text-xs"
                >
                  View Certificate
                </Btn>
                <Btn
                  variant="primary"
                  size="sm"
                  onClick={() => handleDownload(cert)}
                  className="text-xs"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </Btn>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ─── VIEW CERTIFICATE PREVIEW MODAL ─────────────────────────── */}
      <Modal
        isOpen={Boolean(viewingCert)}
        onClose={() => setViewingCert(null)}
        title="Official Certificate Preview"
        size="lg"
      >
        {viewingCert && (
          <div className="space-y-6 text-center py-4">
            {/* Visual certificate canvas card */}
            <div className="border-4 border-double border-amber-600/30 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30 p-8 sm:p-12 rounded-3xl shadow-inner relative overflow-hidden">
              <div className="absolute top-2 left-2 text-2xl opacity-40">⚜️</div>
              <div className="absolute top-2 right-2 text-2xl opacity-40">⚜️</div>
              <div className="absolute bottom-2 left-2 text-2xl opacity-40">⚜️</div>
              <div className="absolute bottom-2 right-2 text-2xl opacity-40">⚜️</div>

              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                FLOYD SCHOOL INNOVATION CHALLENGE
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-serif mb-2">
                Certificate of {viewingCert.certificateType}
              </h2>
              <p className="text-xs text-slate-500 italic mb-6">This is proudly presented to</p>

              <h3 className="text-2xl font-bold text-blue-700 underline decoration-blue-200 underline-offset-8 mb-6">
                {profile?.name || viewingCert.participantName}
              </h3>

              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed mb-8">
                for outstanding participation and successfully building an innovative prototype in the{' '}
                <strong className="text-slate-900 font-semibold">{viewingCert.hackathon}</strong> on {viewingCert.date}.
              </p>

              <div className="flex justify-between items-end pt-6 border-t border-slate-200 text-xs text-slate-500">
                <div className="text-left">
                  <div className="font-serif italic font-bold text-slate-800 text-sm">Floyd Academy</div>
                  <div>Program Director</div>
                </div>
                <div className="font-mono text-[10px] text-slate-400">
                  REF: {viewingCert.id}
                </div>
                <div className="text-right">
                  <div className="font-serif italic font-bold text-slate-800 text-sm">Organizing Chair</div>
                  <div>Event Lead</div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Btn variant="secondary" size="sm" onClick={() => setViewingCert(null)}>
                Close
              </Btn>
              <Btn variant="primary" size="sm" onClick={() => handleDownload(viewingCert)}>
                Download High-Res PDF
              </Btn>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
